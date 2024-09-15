import React from "react";
import {Container} from '../components/index'
import {PostForm as PostFormComponent} from '../components/index'

function AddPost() {
    return(
        <div className="py-8">
            <Container>
                <PostFormComponent />
            </Container>
        </div>
    )
}

export default AddPost