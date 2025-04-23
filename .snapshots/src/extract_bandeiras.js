const fs = require('fs');
const pdfParse = require('pdf-parse');

const extractBandeiras = async (pdfPath) => {
    const bandeiras = ["Visa", "Mastercard", "American Express", "Elo", "Hipercard", "Diners Club", "Discover", "JCB"];
    const foundBandeiras = new Set();

    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const pdfData = await pdfParse(dataBuffer);

        const text = pdfData.text;
        bandeiras.forEach((bandeira) => {
            if (text.toLowerCase().includes(bandeira.toLowerCase())) {
                foundBandeiras.add(bandeira);
            }
        });
    } catch (error) {
        console.error(`Erro ao processar o PDF: ${error.message}`);
    }

    return Array.from(foundBandeiras);
};

const validateCreditCard = (cardNumber, bandeiras) => {
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    // Luhn algorithm for basic credit card validation
    const luhnAlgorithm = (number) => {
        const digits = number.split('').map(Number);
        let checksum = 0;
        const reverseDigits = digits.reverse();

        reverseDigits.forEach((digit, index) => {
            if (index % 2 === 1) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            checksum += digit;
        });

        return checksum % 10 === 0;
    };

    if (!luhnAlgorithm(cardNumber)) {
        return false;
    }

    // Placeholder logic for bandeira validation
    return bandeiras.some((bandeira) => cardNumber.includes(bandeira));
};

(async () => {
    const pdfPath = "c:\\Users\\NOTE ALOISIO\\OneDrive\\Documentos\\GitHub\\validador-de-cartao\\.snapshots\\src\\assets\\Bandeiracard.png.pdf";
    const bandeirasEncontradas = await extractBandeiras(pdfPath);

    if (bandeirasEncontradas.length > 0) {
        console.log("Bandeiras encontradas no arquivo:");
        bandeirasEncontradas.forEach((bandeira) => console.log(`- ${bandeira}`));

        // Example card number validation
        const cardNumber = "4111111111111111"; // Replace with actual card number
        const isValid = validateCreditCard(cardNumber, bandeirasEncontradas);
        if (isValid) {
            console.log(`O número do cartão ${cardNumber} é válido.`);
        } else {
            console.log(`O número do cartão ${cardNumber} é inválido.`);
        }
    } else {
        console.log("Nenhuma bandeira encontrada no arquivo.");
    }
})();
