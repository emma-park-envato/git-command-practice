## It's nice to be able kick-off CI builds from our terminal. We can install the git-buildkite tool to achieve this. First you'll need to create a new API key here: https://buildkite.com/user/api-access-tokens the only permission that we need is Modify Builds (write_builds) . Once you've created your key you can setup git-buildkite by running the following setup:

## brew install sj26/git-buildkite/git-buildkite
## git config --global buildkite.apikey my-api-key
## git config --local buildkite.account "envato-marketplaces"
## git config --local buildkite.project "marketplace"`
## You can now kick-off a build by entering git-buildkite on the terminal
