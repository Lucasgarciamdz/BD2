from steam import SteamClient


def main():

    client = SteamClient()

    @client.on('logged_on')

    def handle_after_logon():
        print("Logged on as: {}".format(client.user.name))

    client.cli_login()

    