# Tonbois

A dependency-free static landing page for Tonbois, ready to publish with GitHub Pages.

## Preview locally

```sh
python3 -m http.server 3000 --directory site
```

Then open <http://localhost:3000/>.

## Publish on GitHub Pages

1. Create an empty GitHub repository and push this repository to its `main` branch.
2. In the GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for “Deploy static site to Pages” to finish.

The workflow publishes only the contents of `site/`. No package install or build step is required.

## Use tonbois.com

After the first deployment, open **Settings → Pages**, enter `tonbois.com` under **Custom domain**, and save it. Configure the apex domain with these GitHub Pages `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

If you also want `www.tonbois.com`, point its `CNAME` record to `<github-username>.github.io`. Once GitHub confirms the DNS configuration, enable **Enforce HTTPS**. GitHub also recommends verifying the domain in your account settings.

GitHub documentation:

- [Publishing with a custom GitHub Actions workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
