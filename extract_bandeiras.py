import PyPDF2

def extract_bandeiras(pdf_path):
    bandeiras = ["Visa", "Mastercard", "American Express", "Elo", "Hipercard", "Diners Club", "Discover", "JCB"]
    found_bandeiras = set()

    try:
        with open(pdf_path, "rb") as pdf_file:
            reader = PyPDF2.PdfReader(pdf_file)
            for page in reader.pages:
                text = page.extract_text()
                for bandeira in bandeiras:
                    if bandeira.lower() in text.lower():
                        found_bandeiras.add(bandeira)
    except Exception as e:
        print(f"Erro ao processar o PDF: {e}")

    return found_bandeiras

def validate_credit_card(card_number, bandeiras):
    """
    Validate a credit card number based on the extracted bandeiras.
    This is a placeholder function for further validation logic.
    """
    if not card_number.isdigit():
        return False

    # Luhn algorithm for basic credit card validation
    def luhn_algorithm(number):
        digits = [int(d) for d in str(number)]
        checksum = 0
        reverse_digits = digits[::-1]
        for i, digit in enumerate(reverse_digits):
            if i % 2 == 1:
                digit *= 2
                if digit > 9:
                    digit -= 9
            checksum += digit
        return checksum % 10 == 0

    if not luhn_algorithm(card_number):
        return False

    # Check if the card number matches any known bandeira prefix (placeholder logic)
    for bandeira in bandeiras:
        if bandeira.lower() in card_number.lower():
            return True

    return False

if __name__ == "__main__":
    pdf_path = r"c:\Users\NOTE ALOISIO\OneDrive\Documentos\GitHub\validador-de-cartao\.snapshots\src\assets\Bandeiracard.png.pdf"
    bandeiras_encontradas = extract_bandeiras(pdf_path)
    if bandeiras_encontradas:
        print("Bandeiras encontradas no arquivo:")
        for bandeira in bandeiras_encontradas:
            print(f"- {bandeira}")
        
        # Example card number validation
        card_number = "4111111111111111"  # Replace with actual card number
        is_valid = validate_credit_card(card_number, bandeiras_encontradas)
        if is_valid:
            print(f"O número do cartão {card_number} é válido.")
        else:
            print(f"O número do cartão {card_number} é inválido.")
    else:
        print("Nenhuma bandeira encontrada no arquivo.")
