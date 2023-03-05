import Link from 'next/link'
  
import Grid from '@components/Grid'

# speed

The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by <Link href="/maxValue">maxValue</Link>) should be the maximum speed achievable under regular conditions.<br/><br/>

Typical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot<br/><br/>

*Note 1: Use <a class="localLink" href="/minValue">minValue</a> and <a class="localLink" href="/maxValue">maxValue</a> to indicate the range. Typically, the minimal value is zero.
* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the <a class="localLink" href="/valueReference">valueReference</a> property.

## Property of



