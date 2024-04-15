# Shopware App

## Development

- Start shopware locally: `docker run --rm -p 80:80 -v $(pwd)/LocalApp:/var/www/html/custom/apps/TingsReceiptIntegration dockware/dev:6.6.0.2`
  This will start shopware and sync the the shopware app in `./LocalApp` with the docker image. You can connect the docker instance with this command `docker exec -it <service_name> sh`, `<service_name>` being whatever `docker ps` returns.
- Open shopware on [localhost](http://localhost/admin)
- Either install the app from the [localhost](http://localhost/admin) or from within the docker instance, install the app by running `bin/console app:install --activate TingsReceiptIntegration`
- Add an integration from [this page](http://localhost/admin#/sw/integration/index)
- The integration must have the `TingsReceiptIntegration` role, which should show up automatically

Default admin credentials [here](https://docs.dockware.io/use-dockware/default-credentials#what-are-the-default-shopware-6-admin-credentials)

App docs: https://developer.shopware.com/docs/guides/plugins/apps/app-base-guide.html
ub
