### Polar Pro Dev Environment Integration Steps

1. Become a collaborator of PolarPro's github organization

github.com/polar-pro

2. Clone the repository into your local Environment

```
git clone https://github.com/polar-pro/production-site.git
```

3. Create a config.yml in your environment.
```
development:
  password: YOUR_STORE_PW
  theme_id: "YOUR_THEME_ID"
  store: polarpro.myshopify.com
```

Please note your theme id should be unique and only be used by you as your own personal developer Shopify Test environment

4. After making changes on your branch, create a pull request to merge to master branch before deployment.

5. Become a user in Deploy Bot (email)

6. After your branch successfully merges, deploy the github source code to Shopify's site through Deploy Bot

polar-pro.deploybot.com

7. Deploy commit -> pushes changes to live production site.
