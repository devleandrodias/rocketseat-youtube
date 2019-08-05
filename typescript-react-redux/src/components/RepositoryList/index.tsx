import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';

// Mapear os tipos das informações que vem de mapStateToProps
interface StateProps {
  repositories: Repository[]
}
// Mapear as funções que vem de mapDispatchToProps
interface DispachProps {
  loadRequest(): void;
}

type Props = StateProps & DispachProps

class RepositoryList extends React.Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    // eslint-disable-next-line no-console
    console.log(repositories);
    return (
      <ul>
        {repositories.map(repository => <li key={repository.id}>{repository.name}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
