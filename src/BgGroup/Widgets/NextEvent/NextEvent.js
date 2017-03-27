import React from 'react';
import EventCard from '../Events/EventCard/EventCard';
import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';

const DaysToEvent = daysUntill => (
  `Next Event (${daysUntill} days)`
)

const NextEvent = props => {
  const daysToEvent = DaysToEvent(props.event.daysUntill);

  return (
    <Widget className="next-event">
        <WidgetTitle title={ daysToEvent } />
        <WidgetBody>
          <EventCard date={ props.event.date }
            content={ props.event.content }/>
        </WidgetBody>
    </Widget>
  );
}

NextEvent.propTypes = {
  event: React.PropTypes.object.isRequired,
};

export default NextEvent;
