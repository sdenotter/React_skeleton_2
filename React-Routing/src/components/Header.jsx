var React = require("react");

var Header = React.createClass({
    
    render: function() {
        
        
        var divStyle ={
            backgroundColor: "#0288D1",
            margin: "auto"
            
        }
        var headerStyle = {
            marginLeft: 15
        }
        var socialStyle = {
            marginTop: 35,
            textAlign: "right",
            marginRight: 20
            
        }
        var imgStyle = {
            height: 30,
            width: 30,
            marginLeft: 15
        }
        
        return (
            <div className = "row" style={divStyle}>
                <div className = "col-sm-6" >
                    <h1 style={headerStyle}>Canada News</h1>
                    <h4 style={headerStyle}>Top stories in Canada</h4>
                </div>
                
                <div className = "col-sm-6 pullRight" >
                    <div className="row">
                        <div style={socialStyle}>
                                <a href ="www.twitter.com"><img style={imgStyle} src = "http://www.coetail.com/seriously/files/2016/04/twitter-logo.png"></img></a>
                                <a href ="www.instagram.com"><img style={imgStyle} src = "http://payload325.cargocollective.com/1/16/541951/8804312/insta_icon_duplicate.png"></img></a>
                                <a href ="www.facebook.com"><img style={imgStyle} src = "https://www.facebookbrand.com/img/fb-art.jpg"></img></a>
                                <a href ="www.twitter.com"><img style={imgStyle} src = "http://www.gfsa.com/wp-content/uploads/2014/08/Linkedin-logo.png"></img></a>
                                <a href ="www.twitter.com"><img style={imgStyle} src = "https://image.freepik.com/free-icon/email-envelope-outline-shape-with-rounded-corners_318-49938.png"></img></a>
                        </div>
                    </div>
                    <div className="row">
                        <div style={socialStyle}>
                            <button className="btn btn-primary">News</button>
                            <button className="btn btn-primary">Photos</button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
});

module.exports = Header;
 