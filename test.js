12) Install puma-dev
The single Envato Market application handles all of the different marketplaces that Envato hosts like Themeforest and Audiojungle. To be able to access the different shopfronts locally we need to be able to access our local application using a domain name. For example https://themeforest.test or https://audiojungle.test. To achieve this we can use the puma-dev tool.

brew install puma/puma/puma-dev
sudo puma-dev -setup
mkdir ~/.puma-dev
cd ~/.puma-dev
echo "8080" | tee -a 3docean audiojungle codecanyon graphicriver photodune themeforest videohive

puma-dev -install -d test
security add-trusted-cert -k login.keychain-db ~/Library/Application\ Support/io.puma.dev/cert.pem
