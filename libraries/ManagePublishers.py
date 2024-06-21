"""Module for executing requests"""
import requests


class ManagePublishers:
    """all construction work requests are defined in this class"""
    ROBOT_LIBRARY_SCOPE = 'TESTCASE'

    def __init__(self, token):
        self.base_url = 'https://ontw.app.amsterdam.nl/construction-work/api/v1'
        self.token = token
        self.headers = {
            'accept': 'application/json',
            'Authorization': f'Bearer {self.token}'
        }
        self.timeout = 10

    def set_bearer_token(self, token):
        """set the bearer token in the headers"""
        self.headers['Authorization'] = f'Bearer {token}'

    def get_manage_publishers(self, token):
        """Get a list of publishers"""
        url = f'{self.base_url}/manage/publishers'
        self.set_bearer_token(token)
        response = requests.get(
            url, headers=self.headers, timeout=self.timeout)
        return response.json()

    def post_manage_publisher(self, name, email, token):
        """Create a new publisher"""
        url = f'{self.base_url}/manage/publishers'
        self.set_bearer_token(token)
        data = {
            "name": name,
            "email": email
        }
        response = requests.post(
            url, headers=self.headers, json=data, timeout=self.timeout)
        return response.json()

    def patch_manage_publishers(self, publisher_id, name, email, token):
        """Update a publishers name or email"""
        url = f'{self.base_url}/manage/publishers/{publisher_id}'
        self.set_bearer_token(token)
        data = {
            "name": name,
            "email": email
        }
        response = requests.patch(
            url, headers=self.headers, json=data, timeout=self.timeout)
        return response.json()

    def delete_publisher(self, publisher_id, token):
        """Delete a publisher by id"""
        url = f'{self.base_url}/manage/publishers/{publisher_id}'
        self.set_bearer_token(token)
        response = requests.delete(
            url, headers=self.headers, timeout=self.timeout)
        return response.status_code

    def delete_publisher_by_mail(self, email, token):
        """Delete a publisher by email"""
        publishers = self.get_manage_publishers(token)
        for publisher in publishers:
            if publisher['email'] == email:
                response = self.delete_publisher(publisher['id'], token)
                return response
        return 404


# Example usage:
# api = ConstructionWorkAPI('1234')

# # Get publishers
# print(api.get_manage_publishers('1234'))

# # Get publisher
# print(api.get_publisher(1))

# # Create publisher
# print(api.create_publisher('test', 'test@example.nl'))

# # Update publisher
# print(api.update_publisher(1, 'test', 'user@example.com'))

# # Delete publisher
# print(api.delete_publisher(1))
