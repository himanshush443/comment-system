import React from 'react';
import Button from '@material-ui/core/Button';

import { Comment } from './Comment';

export const CommentBox = () => {
    return (
        <div>
            <Button variant="contained" color="primary">
                Comment
            </Button>
            <Comment />
        </div>
    )
}
