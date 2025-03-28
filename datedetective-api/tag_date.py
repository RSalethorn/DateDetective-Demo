from datetime import datetime

def tag_date(date_str, date_format):
    date_format_split = list(date_format)
    
    date_object = datetime.strptime(date_str, date_format)

    # List of tagged characters from date string
    tagged_date_str = []
    skip_character = False

    # Loop through characters in date format string
    for i in range(len(date_format_split)):
        # If character is a datetime format code then don't add to tagged date string
        if skip_character == True:
            skip_character = False
            continue
        
        # If character is percentage (Start of a datetime format code)
        if date_format_split[i] == "%":
            skip_character = True

            # Recreate single feature of date string from datetime code
            feature_string = date_object.strftime(f"%{date_format_split[i+1]}")

            # Add each character of recreated feature to the tagged date string list
            for c in feature_string:
                tagged_date_str.append({"char": c, "type": date_format_split[i+1]})
        else:
            tagged_date_str.append({"char": date_format_split[i], "type": "untagged"})

    return tagged_date_str