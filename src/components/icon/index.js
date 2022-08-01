import ArrowDown from './arrow-down'
import Book from './book'
import Branch from './branch'
import Cancel from './cancel'
import Check from './check'
import Github from './github'
import Heart from './heart'
import Home from './home'
import Link from './link'
import Location from './location'
import Search from './search'
import Star from './star'
import Twitter from './twitter'
import User from './user'


function Index({ name, ...props }) {
  switch (name) {
    case 'book': {
      return <Book {...props} />
    }
    case 'arrow-down': {
      return <ArrowDown {...props} />
    }
    case 'branch': {
      return <Branch {...props} />
    }
    case 'cancel': {
      return <Cancel {...props} />
    }
    case 'check': {
      return <Check {...props} />
    }
    case 'github': {
      return <Github {...props} />
    }
    case 'heart': {
      return <Heart {...props} />
    }
    case 'home': {
      return <Home {...props} />
    }
    case 'link': {
      return <Link {...props} />
    }
    case 'location': {
      return <Location {...props} />
    }
    case 'search': {
      return <Search {...props} />
    }
    case 'star': {
      return <Star {...props} />
    }
    case 'twitter': {
      return <Twitter {...props} />
    }
    case 'user': {
      return <User {...props} />
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: 'white',
}


export default Index
