import { Icon } from '@iconify/react'
import outlineEvStation from '@iconify-icons/ic/outline-ev-station';

// Pass in some props below
const GeoMarker = () => {
    return (
        <div className="location-marker" >
            <Icon icon={outlineEvStation} className="location-icon" />
        </div>
    )
}

export default GeoMarker;