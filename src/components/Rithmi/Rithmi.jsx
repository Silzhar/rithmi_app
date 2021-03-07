import React, { useState, useEffect, Component  } from 'react'

import { getBaseData, getDataFromUrl } from '../../services/samplesService'

class Rithmi extends Component {
  state = {
    samples: [],
    nextPage: null,
  }

  async componentDidMount() {
    const baseData = await getBaseData()

  this.setState({
    samples: baseData.results,
    nextPage: baseData.nextPage,
  })
  }

  handleLoadData = async () => {
    const dataFromUrl = await getDataFromUrl(this.state.nextPage)

    this.setState((prevState) => ({
      samples: [...prevState.samples, ...dataFromUrl.results],
      nextPage: dataFromUrl.nextPage,
    }))
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.samples.map((sample) => {
            return (
              <li key={sample.id}>
                <h3>Date: {sample.date}</h3>
                <h3>ID: {sample.id}</h3>

              </li>
            )
          })}
        </ul>

        <button onClick={this.handleLoadData}>Load more</button>
      </div>
    );
  }
}

export default Rithmi
