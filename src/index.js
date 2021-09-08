import React, { useState, useEffect } from 'react'
import { css } from 'glamor'

import { Slider, Field, Interaction } from '@project-r/styleguide'
import { Chart } from '@project-r/styleguide/chart'

import { useEventListener, createCustomEvent, toNumber } from './lib/utils'

const { P } = Interaction

const styles = {
  sliderLabels: css({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  }),
}

const data = [
  {
    percentile: 0,
    threshold: 0,
  },
  {
    percentile: 1,
    threshold: 0,
  },
  {
    percentile: 2,
    threshold: 0,
  },
  {
    percentile: 3,
    threshold: 0,
  },
  {
    percentile: 4,
    threshold: 0,
  },
  {
    percentile: 5,
    threshold: 0,
  },
  {
    percentile: 6,
    threshold: 0,
  },
  {
    percentile: 7,
    threshold: 0,
  },
  {
    percentile: 8,
    threshold: 0,
  },
  {
    percentile: 9,
    threshold: 0,
  },
  {
    percentile: 10,
    threshold: 0,
  },
  {
    percentile: 11,
    threshold: 0,
  },
  {
    percentile: 12,
    threshold: 0,
  },
  {
    percentile: 13,
    threshold: 0,
  },
  {
    percentile: 14,
    threshold: 0,
  },
  {
    percentile: 15,
    threshold: 0,
  },
  {
    percentile: 16,
    threshold: 0,
  },
  {
    percentile: 17,
    threshold: 0,
  },
  {
    percentile: 18,
    threshold: 0,
  },
  {
    percentile: 19,
    threshold: 0,
  },
  {
    percentile: 20,
    threshold: 0,
  },
  {
    percentile: 21,
    threshold: 0,
  },
  {
    percentile: 22,
    threshold: 0,
  },
  {
    percentile: 23,
    threshold: 0,
  },
  {
    percentile: 24,
    threshold: 110,
  },
  {
    percentile: 25,
    threshold: 381,
  },
  {
    percentile: 26,
    threshold: 732,
  },
  {
    percentile: 27,
    threshold: 1166,
  },
  {
    percentile: 28,
    threshold: 1682,
  },
  {
    percentile: 29,
    threshold: 2280,
  },
  {
    percentile: 30,
    threshold: 2962,
  },
  {
    percentile: 31,
    threshold: 3726,
  },
  {
    percentile: 32,
    threshold: 4575,
  },
  {
    percentile: 33,
    threshold: 5507,
  },
  {
    percentile: 34,
    threshold: 6523,
  },
  {
    percentile: 35,
    threshold: 7624,
  },
  {
    percentile: 36,
    threshold: 8810,
  },
  {
    percentile: 37,
    threshold: 10081,
  },
  {
    percentile: 38,
    threshold: 11438,
  },
  {
    percentile: 39,
    threshold: 12883,
  },
  {
    percentile: 40,
    threshold: 14415,
  },
  {
    percentile: 41,
    threshold: 16038,
  },
  {
    percentile: 42,
    threshold: 17752,
  },
  {
    percentile: 43,
    threshold: 19561,
  },
  {
    percentile: 44,
    threshold: 21469,
  },
  {
    percentile: 45,
    threshold: 23480,
  },
  {
    percentile: 46,
    threshold: 25601,
  },
  {
    percentile: 47,
    threshold: 27838,
  },
  {
    percentile: 48,
    threshold: 30203,
  },
  {
    percentile: 49,
    threshold: 32706,
  },
  {
    percentile: 50,
    threshold: 35364,
  },
  {
    percentile: 51,
    threshold: 38195,
  },
  {
    percentile: 52,
    threshold: 41224,
  },
  {
    percentile: 53,
    threshold: 44479,
  },
  {
    percentile: 54,
    threshold: 47997,
  },
  {
    percentile: 55,
    threshold: 51820,
  },
  {
    percentile: 56,
    threshold: 55965,
  },
  {
    percentile: 57,
    threshold: 60409,
  },
  {
    percentile: 58,
    threshold: 65134,
  },
  {
    percentile: 59,
    threshold: 70126,
  },
  {
    percentile: 60,
    threshold: 75380,
  },
  {
    percentile: 61,
    threshold: 80905,
  },
  {
    percentile: 62,
    threshold: 86730,
  },
  {
    percentile: 63,
    threshold: 92910,
  },
  {
    percentile: 64,
    threshold: 99536,
  },
  {
    percentile: 65,
    threshold: 106723,
  },
  {
    percentile: 66,
    threshold: 114502,
  },
  {
    percentile: 67,
    threshold: 122871,
  },
  {
    percentile: 68,
    threshold: 131828,
  },
  {
    percentile: 69,
    threshold: 141376,
  },
  {
    percentile: 70,
    threshold: 151525,
  },
  {
    percentile: 71,
    threshold: 162295,
  },
  {
    percentile: 72,
    threshold: 173724,
  },
  {
    percentile: 73,
    threshold: 185882,
  },
  {
    percentile: 74,
    threshold: 198879,
  },
  {
    percentile: 75,
    threshold: 212868,
  },
  {
    percentile: 76,
    threshold: 227954,
  },
  {
    percentile: 77,
    threshold: 244226,
  },
  {
    percentile: 78,
    threshold: 261780,
  },
  {
    percentile: 79,
    threshold: 280727,
  },
  {
    percentile: 80,
    threshold: 301195,
  },
  {
    percentile: 81,
    threshold: 323334,
  },
  {
    percentile: 82,
    threshold: 347323,
  },
  {
    percentile: 83,
    threshold: 373385,
  },
  {
    percentile: 84,
    threshold: 401809,
  },
  {
    percentile: 85,
    threshold: 432976,
  },
  {
    percentile: 86,
    threshold: 467424,
  },
  {
    percentile: 87,
    threshold: 505933,
  },
  {
    percentile: 88,
    threshold: 549545,
  },
  {
    percentile: 89,
    threshold: 599360,
  },
  {
    percentile: 90,
    threshold: 656804,
  },
  {
    percentile: 91,
    threshold: 723879,
  },
  {
    percentile: 92,
    threshold: 803550,
  },
  {
    percentile: 93,
    threshold: 900553,
  },
  {
    percentile: 94,
    threshold: 1023200,
  },
  {
    percentile: 95,
    threshold: 1186444,
  },
  {
    percentile: 96,
    threshold: 1416658,
  },
  {
    percentile: 97,
    threshold: 1772646,
  },
  {
    percentile: 98,
    threshold: 2430361,
  },
  {
    percentile: 99,
    threshold: 4150191,
  },
]

const Index = ({
  showLabel,
  showSlider,
  showAllBars,
  showPoorerBars,
  showRicherBars,
}) => {
  const [sliderValue, setSliderValue] = useState(80)
  const [barChartData, setBarChartData] = useState(data)
  const [userWealth, setUserWealth] = useState(100000)
  const [userPercentile, setUserPercentile] = useState(25)

  console.log(barChartData)

  useEffect(() => {
    setBarChartData(
      data.map((d) => {
        return {
          percentile: d.percentile.toString(),
          value: d.threshold.toString(),
          color:
            d.percentile === sliderValue
              ? 'estimate'
              : d.percentile === userPercentile
              ? 'reality'
              : 'default',
        }
      })
    )
  }, [sliderValue, userPercentile])

  useEffect(() => {
    console.log(data[99].threshold)
    let percentile =
      parseInt(userWealth) < data[99].threshold
        ? data.find((o) => o.threshold >= parseInt(userWealth)).percentile - 1
        : 99
    setUserPercentile(percentile)
  }, [userWealth])

  useEventListener('sliderMove', (event) => setSliderValue(event.detail))
  useEventListener('wealthInput', (event) => setUserWealth(event.detail))

  const onChangeSliderValue = (_, value) => {
    setSliderValue(toNumber(value))
    window.dispatchEvent(
      createCustomEvent('sliderMove', { detail: toNumber(value) })
    )
  }

  const onChangeUserWealth = (_, value) => {
    setUserWealth(toNumber(value))
    window.dispatchEvent(
      createCustomEvent('wealthInput', { detail: toNumber(value) })
    )
  }

  const createOnTickUserWealth = (inc) => (_) =>
    onChangeUserWealth(_, userWealth + inc)

  return (
    <div>
      {showSlider && (
        <>
          <P>Was schätzen Sie? In welcher Perzentile liegt Ihr Vermögen?</P>
          <Slider
            label={'Ihre Schätzung: ' + sliderValue + '. Perzentile'}
            value={sliderValue}
            min='0'
            max='99'
            fullWidth
            onChange={onChangeSliderValue}
          />
          <div {...styles.sliderLabels}>
            <span>0</span>
            <span>99</span>
          </div>
        </>
      )}
      {showLabel && (
        <Field
          label='Vermögen'
          value={userWealth}
          onChange={onChangeUserWealth}
          onInc={createOnTickUserWealth(1000)}
          onDec={createOnTickUserWealth(-1000)}
        />
      )}

      {showAllBars && (
        <Chart
          config={{
            type: 'TimeBar',
            x: 'percentile',
            padding: 0,
            xTicks: [0, 25, 50, 75, 99],
            yTicks: [],
            xScale: 'linear',
            xBandPadding: 0.5,
            height: 100,
            color: 'color',
            colorLegend: false,
            colorMap: {
              default: '#D5D8D7',
              estimate: '#00A000',
              reality: '#D02324',
            },
            unit: 'Franken',
            xUnit: '. Perzentil',
          }}
          values={barChartData.map((d) => {
            return { ...d, value: '1000' }
          })}
        />
      )}

      {showPoorerBars && (
        <Chart
          config={{
            type: 'TimeBar',
            x: 'percentile',
            padding: 0,
            xTicks: [0, 25, 50, 75, 99],
            yTicks: [],
            xScale: 'linear',
            xBandPadding: 0.5,
            height: 400,
            color: 'color',
            colorLegend: false,
            colorMap: {
              default: '#D5D8D7',
              estimate: '#00A000',
              reality: '#D02324',
            },
            unit: 'Franken',
            xUnit: '. Perzentil',
            yScaleInvert: true,
            xAnnotations: [
              {
                x: sliderValue?.toString(),
                value: barChartData[sliderValue].value?.toString(),
                label: 'Schätzung',
                showValue: false,
                position: 'bottom',
                align: 'left',
              },
              {
                x: userPercentile?.toString(),
                value: userWealth?.toString(),
                label: 'Tatsächlich',
                showValue: false,
                position: 'bottom',
              },
            ],
          }}
          values={barChartData.map((d) => {
            let maxPercentile = Math.max(userPercentile, sliderValue)
            console.log(maxPercentile)
            return {
              value: d.percentile <= maxPercentile ? d.value?.toString() : '0',
              percentile: d.percentile?.toString(),
              color: d.color,
            }
          })}
        />
      )}

      {showRicherBars && (
        <Chart
          config={{
            type: 'TimeBar',
            x: 'percentile',
            padding: 0,
            xTicks: [0, 25, 50, 75, 99],
            yTicks: [],
            xScale: 'linear',
            xBandPadding: 0.5,
            height: 10000,
            color: 'color',
            colorLegend: false,
            colorMap: {
              default: '#D5D8D7',
              estimate: '#00A000',
              reality: '#D02324',
            },
            unit: 'Franken',
            xUnit: '. Perzentil',
            yScaleInvert: true,
            xAnnotations: [
              {
                x: sliderValue?.toString(),
                value: barChartData[sliderValue].value?.toString(),
                label: 'Schätzung',
                showValue: false,
                position: 'bottom',
                align: 'left',
              },
              {
                x: userPercentile?.toString(),
                value: userWealth?.toString(),
                label: 'Tatsächlich',
                showValue: false,
                position: 'bottom',
              },
              {
                x1: '0',
                x2: '90',
                value: 656804,
                label: 'Reichste 10 Prozent',
                showValue: true,
                unit: 'Franken',
                position: 'bottom',
                ghost: true,
                domain: ['4150191', '0'],
              },
            ],
          }}
          values={barChartData.map((d) => {
            let minPercentile = Math.min(userPercentile, sliderValue)
            return {
              value: d.percentile >= minPercentile ? d.value?.toString() : '0',
              percentile: d.percentile?.toString(),
              color: d.color,
            }
          })}
        />
      )}
    </div>
  )
}

export default Index
