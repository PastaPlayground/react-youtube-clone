import React from 'react'
import ChannelRow from "./ChannelRow.js";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

// Reusing component from VideoCardjs
import VideoRow from "./VideoRow.js";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_fliter">
                <TuneOutlinedIcon />
                <h2>FLITERS</h2>
                <hr />
            </div>
            

            {/* Channel */}
            <ChannelRow 
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRuKSudAjDirwPLyBiqDKQId-yRLaTCd6TrTN5NRg=s176-c-k-c0x00ffffff-no-rj-mo"
            channelName = "尤汐伯夷"
            verified
            subs = "214k subscribers"
            numOfVids = "4080 videos"
            description = "Taiwan Mahjong Channel"
            />

            <h3 className="searchPage_latest">Latest from 尤汐伯夷</h3>

            {/* Video */}
            <VideoRow
            title = "Mahjong World Champion Road: Lemon"
            views = "2.3M views"
            timestamp = "3 days ago"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRuKSudAjDirwPLyBiqDKQId-yRLaTCd6TrTN5NRg=s88-c-k-c0x00ffffff-no-rj"
            channelName = "尤汐伯夷"
            verified
            videoThumbnail = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
            description = "dadad"
            />

            <VideoRow
            title = "Mahjong World Champion Road: Lemon"
            views = "2.3M views"
            timestamp = "3 days ago"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRuKSudAjDirwPLyBiqDKQId-yRLaTCd6TrTN5NRg=s88-c-k-c0x00ffffff-no-rj"
            channelName = "尤汐伯夷"
            verified
            videoThumbnail = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
            description = "dadad"
            />

<VideoRow
            title = "Mahjong World Champion Road: Lemon"
            views = "2.3M views"
            timestamp = "3 days ago"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRuKSudAjDirwPLyBiqDKQId-yRLaTCd6TrTN5NRg=s88-c-k-c0x00ffffff-no-rj"
            channelName = "尤汐伯夷"
            verified
            videoThumbnail = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
            description = "dadad"
            />

<VideoRow
            title = "Mahjong World Champion Road: Lemon"
            views = "2.3M views"
            timestamp = "3 days ago"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRuKSudAjDirwPLyBiqDKQId-yRLaTCd6TrTN5NRg=s88-c-k-c0x00ffffff-no-rj"
            channelName = "尤汐伯夷"
            verified
            videoThumbnail = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
            description = "dadad"
            />

<VideoRow
            title = "Mahjong World Champion Road: Lemon"
            views = "2.3M views"
            timestamp = "3 days ago"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRuKSudAjDirwPLyBiqDKQId-yRLaTCd6TrTN5NRg=s88-c-k-c0x00ffffff-no-rj"
            channelName = "尤汐伯夷"
            verified
            videoThumbnail = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
            description = "dadad"
            />

<VideoRow
            title = "Mahjong World Champion Road: Lemon"
            views = "2.3M views"
            timestamp = "3 days ago"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRuKSudAjDirwPLyBiqDKQId-yRLaTCd6TrTN5NRg=s88-c-k-c0x00ffffff-no-rj"
            channelName = "尤汐伯夷"
            verified
            videoThumbnail = "https://i.ytimg.com/vi/DW-Ie4EOt28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj2o5xj47AXFLpTtWvvklCfuZRdA"
            description = "dadad"
            />

            <p className="moreVideo">+8 MORE</p>
            <hr />
        </div>
    )
}

export default SearchPage
