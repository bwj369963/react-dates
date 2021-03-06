import React from 'react';
import moment from 'moment';
import { storiesOf } from '@kadira/storybook';

import DateRangePickerWrapper from '../examples/DateRangePickerWrapper';

const TestCustomInputIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    C
  </span>
);

const TestCustomArrowIcon = () => (
  <span
    style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px',
    }}
  >
    {'--->'}
  </span>
);

storiesOf('DRP - Input Props', module)
  .addWithInfo('default', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
    />
  ))
  .addWithInfo('with clear dates button', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
    />
  ))
  .addWithInfo('reopens DayPicker on clear dates', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showClearDates
      reopenPickerOnClearDates
    />
  ))
  .addWithInfo('with custom display format', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      displayFormat="MMM D"
    />
  ))
  .addWithInfo('with show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      showDefaultInputIcon
    />
  ))
  .addWithInfo('with custom show calendar icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      customInputIcon={<TestCustomInputIcon />}
    />
  ))
  .addWithInfo('with custom arrow icon', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      customArrowIcon={<TestCustomArrowIcon />}
    />
  ))
  .addWithInfo('with screen reader message', () => (
    <DateRangePickerWrapper
      initialStartDate={moment().add(3, 'days')}
      initialEndDate={moment().add(10, 'days')}
      screenReaderInputMessage="Here you could inform screen reader users of the date format, minimum nights, blocked out dates, etc"
    />
  ));
