import styled from 'styled-components'
import props from './profile-data'
import Button from './button'
import Icon from './icon'

const ProfileStyled = styled.div`
  grid-area: profile;
  /* background-color: yellow; */

  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: .5rem;
  }
  .username {
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }
  .info {
    /* border: 1px solid red; */
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }
`

function Profile() {
  const { twitter_username, blog, name, login, avatar_url, bio, followers, following, location } = props
  return (
    <ProfileStyled>

      <img src={avatar_url} className='avatar' width="278" height="278" alt="" />
      <p className="name">{name}</p>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button
          text="Follow"
          link="#"
        />
        <Button
          text="Sponsor"
          icon={<Icon
            name="heart"
            size={24}
            color="var(--pink)"
          />}
        />
      </div>
      <p className="bio info">
        {bio}
      </p>
      <p className="follwers info">
        • {followers} <span>followers</span> <span>•</span> {following} <span>following</span>
      </p>
      {/* <p className="stars info">
        • 81
      </p> */}
      <p className="location info">
        • {location}
      </p>
      <a className="info" href={blog} target="_blank" rel="noreferrer">
        {blog}
      </a>
      <a className="info" href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">
        @{twitter_username}
      </a>
    </ProfileStyled>
  )
}

export default Profile
