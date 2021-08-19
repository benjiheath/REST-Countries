## Frontend Mentor - REST Countries API

This is a solution to the [REST Countries API with color theme switcher challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) on [Frontend Mentor](https://www.frontendmentor.io).

With this project I try out some different state management techniques and practice my responsive layout skills. Implementing the day/night styling was fun, and I also included sorting for the countries list.

- [Live demo here](https://hardcore-hoover-1339fe.netlify.app/)

Some things I picked up:

- Managing state with React's Context API and a global reducer

- Chaining array methods to render data based on user's filter/sort choices as opposed to creating state for each case

- Basic routing with React Router, inc 404/Not Found

- SASS & Styled Components for the theme toggling
  - I found that using Sass for part of the theme toggling was a bit cleaner, where I toggle class-scoped variables on the document object according to 'theme' state

### Screenshots

![screenshot](https://i.gyazo.com/98d9e0ad9779af646869772d6a75da3f.gif)
![screenshot](https://i.gyazo.com/5a1a9114be4544b04383e619b8d3b5e0.gif)
![screenshot](https://i.gyazo.com/dcb2c1dde98eae63c8cb79c48786bf31.gif)

<br>
<br>
<br>
<br>

#### Blurb

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
