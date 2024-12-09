import os

def search_files(directory, search_text):
    for root, dirs, files in os.walk(directory):
        # Ignore the 'node_modules' directory
        if 'node_modules' in dirs:
            dirs.remove('node_modules')  # Skip 'node_modules'

        for file in files:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    for line_num, line in enumerate(f, start=1):
                        if search_text in line:
                            print(f"Found in {file_path} at line {line_num}: {line.strip()}")
            except Exception:
                pass

# Example usage
search_files('.', "About")

