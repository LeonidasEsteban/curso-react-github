import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import repoData from './components/repo-data';

// const repoList = [
//   {
//     name: 'mi primer proyecto con react',
//     id: 123,
//   },
//   {
//     name: 'mi segundos proyecto con react',
//     id: 124,
//   }
// ]

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoData} />
      <Search />
    </Layout>
  )

}

export default App;
