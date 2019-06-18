# Polar Pro Dev Environment Integration Steps


### Github Steps

1. Become a collaborator of PolarPro's github organization

[Polar Pro Company Github Organization Page](https://github.com/polar-pro)

2. Clone the project repository into your local Environment

```
git clone https://github.com/polar-pro/production-site.git
```

3. Create a config.yml in the root of your environment.
```
development:
  password: YOUR_STORE_PW
  theme_id: "YOUR_THEME_ID"
  store: polarpro.myshopify.com
```

Please note your theme id should be unique and only be used by you as your own personal developer Shopify Test environment
The config.yml is in the .gitignore file. Never push your config.yml! It contains sensitive information.

4. Make changes as necessary on your own branch.

 When using themekit, you can make changes  to and use Shopify's test environment by entering the following commands in your terminal inside the project directory.

To make changes to your test theme:
```
theme watch
```
To open the test theme in your browser:
```
theme open
```

5. Push your branch to the remote repository.
```
git push origin your-branch-name
```

6. Submit a pull request and wait for the merge to be approved (by dev team leader or fellow member)

7. Optional: Integrate the github project into your Slack account to receive notificatons. (Helpful for getting updates about pull/merge requests from other team members).

  Install the Github app into your slack account.

  Then use this command to authenticate your Github account into Slack (You should select the team repository polar-pro/production-site):

  ```
  /github subscribe polar-pro/production-site
  ```

---

### Deploy Bot Steps

1. Become a user of Polar Pro's Deploy Bot.
[Polar Pro Deploy Bot Dashboard Page](https://polar-pro.deploybot.com)


2. If your branch successfully merged with the master branch, you will be able to see the commit inside the "Live Site" Environment.

3. Deploy your change to the live site. You can check which files are being changed. Also the commit log should mirror your commit message from Github.

4. Your changes should have been implemented to the live site.
