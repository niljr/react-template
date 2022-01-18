// @flow
import moment from 'moment';

moment.updateLocale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a second',
        ss: '%dsec',
        m: 'a minute',
        mm: '%dmin',
        w: '1 week',
        ww: '%dw',
        h: 'an hour',
        hh: '%dh',
        d: 'a day',
        dd: '%dd',
        M: 'a month',
        MM: '%dm',
        y: 'a year',
        yy: '%dy'
    }
});

export const getRelativeTime = (date: string): string => {
    return moment(new Date(date)).fromNow();
};
