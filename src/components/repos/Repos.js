import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './Repolist'

 const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key ={repo.id} />);
};

Repos.protypes ={
    repos: PropTypes.array.isRequired
}

export default Repos;