const past = () =>
    fetch("https://api.spacexdata.com/v3/launches/upcoming")
      .then(res => res.json());

export default past;