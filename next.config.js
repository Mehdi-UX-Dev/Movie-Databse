module.exports = {

  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["image.tmdb.org","countryflagsapi.com","avatars.githubusercontent.com","lh3.googleusercontent.com"]
  }
}
