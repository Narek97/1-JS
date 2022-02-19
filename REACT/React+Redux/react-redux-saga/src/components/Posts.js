import React from 'react'
// statei actioni het ashxatelu hamar
import { connect } from 'react-redux'
import Post from './Post'

function Posts({ syncPosts }) {
    if (!syncPosts.length) {
        return <p className='text-center'>
            Postov poka net
        </p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />)
}

const mapStateToProps = state => {
    return {
        syncPosts:state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)


