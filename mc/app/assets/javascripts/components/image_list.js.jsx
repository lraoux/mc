window.ImageList = React.createClass({

    getInitialState: function(){

        // The images array will be populated via AJAX, and
        // the one when the user clicks on an image:

        return { images: [] };
    },

    componentDidMount: function(){

        // When the component loads, send a jQuery AJAX request

        var self = this;

        // API endpoint for Instagram's popular images for the day

        var url = 'api/images';

        $.getJSON(url, function(result){

            if(!result || !result.data || !result.data.length){
                return;
            }

            var images = result.data.map(function(i){

                return {
                    id: i.id,
                    url: i.url,
                    description: i.description,
                    createdAt: i.createdAt,
                    updatedAt: i.updatedAt,
                    author: i.author,
                    subpack: i.subpack,
                    pack: i.pack
                };

            });

            // Update the component's state. This will trigger a render.
            // Note that this only updates the images property, and does
            // not remove the array.

            self.setState({ images: images });

        });

    },

    imageClick: function(id){

        // id holds the ID of the image that was clicked.
        // Find it in the images array, and add it to the

        console.log('you clicked an image');
        // var images = this.state.images;

        // for(var i = 0; i < images.length; i++){
        //
        //     // Find the id in the images array
        //
        //     if(images[i].id == id) {
        //
        //
        //
        //         // Add the image to the array,
        //         // and mark it as a favorite:
        //
        //       .push(images[i]);
        //
        //         break;
        //     }
        //
        // }

        // Update the state and trigger a render
        // this.setState({images: images});

    },

    render: function() {

        var self = this;

        var images = this.state.images.map(function(i){
            return <Image src={i.url} description={i.description} createdAt={i.createdAt} updatedAt={i.updatedAt} author={i.author} subpack={i.subpack} pack={i.pack} onClick={self.imageClick} />
        });

        if(!images.length){
            images = <i>Loading images..</i>;
        }

        return (

            <div>
                <h1>images</h1>
                <div className="images"> {images} </div>

            </div>

        );
    }
});
