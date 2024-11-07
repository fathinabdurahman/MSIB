def safe_divide(a, b):
    try:
        # Memastikan bahwa input adalah angka
        if not (isinstance(a, (int, float)) and isinstance(b, (int, float))):
            raise ValueError("Input harus berupa angka.")
        
        # Memastikan b bukan nol
        if b == 0:
            raise ZeroDivisionError("Tidak dapat membagi dengan nol.")
        
        # Jika semua pengecekan terpenuhi, lakukan pembagian
        result = a / b
        return result
    
    except ValueError as ve:
        print(f"Error: {ve}")
    except ZeroDivisionError as zde:
        print(f"Error: {zde}")
    except Exception as e:
        print(f"Error tak terduga: {e}")

# Contoh penggunaan
print(safe_divide(10, 2))   # Output: 5.0
print(safe_divide(10, 0))   # Output: Error: Tidak dapat membagi dengan nol.
print(safe_divide("10", 2)) # Output: Error: Input harus berupa angka.
