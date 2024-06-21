import dotenv
import os


def save_env(token):
    """Create .env file if it does not exist and save BEARER_TOKEN to it."""
    with open(".env", mode="x", encoding="utf-8") as dotenv_file:
        dotenv_file.write(f"BEARER_TOKEN={token}")
        # find_dotenv = dotenv.find_dotenv()
        # dotenv.load_dotenv(find_dotenv)
        # # Write BEARER_TOKEN to .env file.
        # dotenv.set_key(dotenv_file, "BEARER_TOKEN", token)
        # print(os.environ["BEARER_TOKEN"])  # outputs "value"


def remove_env():
    """Remove .env file."""
    os.remove(".env")
