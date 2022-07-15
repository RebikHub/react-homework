import moment from 'moment';

export default function changeDate(Component) {
    return (props) => {
        const yearsAgo = moment(props.date).fromNow();
        return <Component {...props} date={yearsAgo} />;
    }
}