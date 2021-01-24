import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'V-Pop thang 1',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/9/e/c/c9ec8e136ffde4db3748ee369d675a7f.jpg',
        },
        {
            id: 2,
            name: 'Don Xuan phoi phoi',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/2/e/d/52eda8447c06839a51cc740c40ccbf2a.jpg',
        },
        {
            id: 3,
            name: 'Rap viet the he moi',
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/5/b/d/b5bd52dc56cb78f139067cd7ca5c96e8.jpg',
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;