import dotenv
import os


def save_env(token):
    dotenv_file = dotenv.find_dotenv()
    dotenv.load_dotenv(dotenv_file)

    print(os.environ["BEARER_TOKEN"])  # outputs "value"

    # Write BEARER_TOKEN to .env file.
    dotenv.set_key(dotenv_file, "BEARER_TOKEN", token)
