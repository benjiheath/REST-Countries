# Frontend Mentor - REST Countries

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

I saw this challenge as a great way for me to get my hands dirty with React Router, try out some better state management techniques, and also to hammer in my styling & responsive layout skills. I really enjoyed implementing the day/night styling, and I also included sorting for the countries list.

The most difficult part for me was figuring out how to update the countries list accurately without having to re-render more frequently than necessary given the quantity of country cards. It took me a while to figure out, but I optimized this by chaining the array methods responsible for filtering & sorting to the rendering .map method (instead of using a collection of seperate conditional renders based on multiple states). This combined with placing our fetch & state within the global context allowed for smoother UI updates without having to re-render a fresh country list.

This introduced a problem though when I tried to implement sorting. Sorting by population was simple enough, however since the country data is received by the API in alphabetical order, I figured I'd take the lazy route and just invert the array for reverse-alphabetical sorting. The .reverse() method seemed perfect for this but I couldn't figure out how to conditionally chain it, and creating a seperate conditional render for this would've thwarted my previous efforts in avoiding entire list rerenders. So depsite the consensus against this, I worked around the issue by constructing an array prototype method to enable chaining with the necessary preventative condition.

```jsx
// * Countries.js *

Array.prototype.NaughtyNaughty = function () {
  if (sortMode === 'NameReverse') {
    return this.reverse();
  } else {
    return this;
  }
};

return (
  <CountriesContainer>
    {loading && <Spinner />}
    {!loading &&
      countries &&
      countries
        .filter((country) => (filter ? country.region === filter : country))
        .filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
          switch (sortMode) {
            case 'populationDesc':
              return b.population - a.population;
            case 'populationAsc':
              return a.population - b.population;
            default:
              return null;
          }
        })
        .NaughtyNaughty()
        .map((country) => <CountryCard key={country.name} {...country} />)}
  </CountriesContainer>
);
```

### Challenge criteria

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshots

![screenshot](./screenshots/Animation2.gif)
![screenshot](https://i.gyazo.com/dcb2c1dde98eae63c8cb79c48786bf31.gif)

### Links

- Live demo here: [Live demo](https://hardcore-hoover-1339fe.netlify.app/)

### Built with

- React.js
- Styled Components (& SASS for part of the theme switching)
