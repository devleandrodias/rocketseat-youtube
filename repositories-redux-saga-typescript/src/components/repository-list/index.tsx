import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { bindActionCreators, Dispatch } from 'redux';

// interface Props {
//   repositories: Repository[];
// }

// interface Repository {
//   id: number;
//   name: string;
// }

// interface State {
//   newRepository?: string;
// }

/**
 * Mapear tipo de informacoes que vem do mapStateToProps
 */
interface StateProps {
  repositories: Repository[];
}

/**
 * Mapear funcoes que vem do mapDispatchToProps do redux
 */
interface DispatchProps {
  loadRequest(): void;
}

/**
 * Qualquer outra propriedade que vem de componente pai
 */
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

// class RepositoryList extends Component<Props, State> {
class RepositoryList extends Component<Props> {
  // state = {
  //   newRepository: '',
  // };
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    // const { repositories } = this.props;
    // const { newRepository } = this.state;

    const { repositories } = this.props;

    return <ul>{repositories.map((rep) => rep.name)}</ul>;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
