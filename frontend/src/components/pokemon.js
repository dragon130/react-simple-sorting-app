import React, { Component} from 'react';
import Filter from './filter';
import '../assets/css/pokemon.css';

class Pokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
          pokemon: []
        }
        this.handleSort = this.handleSort.bind(this);
      }
      
      componentDidMount() {
        fetch('http://localhost:5000/api/pokemon')
          .then(res => res.json())
          .then(data => this.setState({pokemon: data}));
      }

      handleSort(value)
      {
        console.log('pokemon sort by', value);

        if(value === 'id')
        {
            console.log('Sort by id!');

            const sortById = this.state.pokemon.sort( (a,b) => {
                if(a.id < b.id) return -1;
                if(a.id > b.id) return 1;
                return 0;
              })

              this.setState({pokemon : sortById});
        }
        else if(value === 'name')
        {
            console.log('Sort by name!');

            const sortByName = this.state.pokemon.sort( (a,b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
              })

              this.setState({pokemon : sortByName});
        }
        else
        {
            console.log('Sort by level!');

            const sortByLevel = this.state.pokemon.sort( (a,b) => {
                if(a.level < b.level) return -1;
                if(a.level > b.level) return 1;
                return 0;
              })

              this.setState({pokemon : sortByLevel});
        }
      }
  
    render()  {
        const pokemonList = this.state.pokemon.map(pokemon => (
                <div key={pokemon.id} className="pokemon-list-column">
                    <div className="pokemon-list-cont">
                        <div className="pokemon-image-cont">
                            <img src={pokemon.img} alt="pokemon"/>
                        </div>
                        <div className="pokemon-id-cont">
                            <h3># {pokemon.id}</h3>
                        </div>
                        <div className="pokemon-name-cont">
                            <h4>{pokemon.name}</h4>
                        </div>
                        <div className="pokemon-level-cont">
                            <h5>Lv. {pokemon.level}</h5>
                        </div>
                    </div>
                    <div className="pokemon-notch-cont">
                 </div>
                </div>
          ));

        return (
            <div>
                <Filter handleSort={this.handleSort}/>
                <div className="pokemon-list-row">
                    {pokemonList}
                </div>
            </div>
        );
    }
}

export default Pokemon;