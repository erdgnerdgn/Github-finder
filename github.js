class Github {
  constructor() {
    this.client_id = "241d53d3a85765791541";
    this.client_secret = "672d2976a4ab27c2dd1c6657200dd1b1f838d621";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }

  async getUser(user) {
    //gelen userla beraber istek atma
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}& client_secret=${this.client_secret}`
    );
    //taking users repos
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    //gelen cevabi jsona cevirme
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    console.log(repos)
    return{
        profile,
        repos
  }
}
}
export default Github;
