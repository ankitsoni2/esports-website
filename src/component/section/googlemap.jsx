import { Component } from "react";

class GoogleMap extends Component {
    render() { 
        return (
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.114578651797!2d77.2213376034019!3d28.65137431046765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a88dcc559%3A0x24fa43c081dbe51!2sChandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1725742862553!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        );
    }
}
 
export default GoogleMap;