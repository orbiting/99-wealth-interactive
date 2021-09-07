import React, { Fragment } from 'react'
import { css } from 'glamor'
import { mediaQueries, Slider, Field, Interaction } from '@project-r/styleguide'
import { Chart } from '@project-r/styleguide/chart'
const { P } = Interaction
// const ASSETS_BASE_URL = 'https://cdn.repub.ch/s3/republik-assets/dynamic-components/REPOSLUG/assets'

const styles = {
  sliderLabels: css({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  }),
  barContainer: css({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }),
  barRectangle: css({
    height: '50px',
    width: '4px',
    backgroundColor: 'red',
  }),
}

const data = [
  {
    percentile: 0,
    threshold: 0,
  },
  {
    percentile: 0.01,
    threshold: 0,
  },
  {
    percentile: 0.02,
    threshold: 0,
  },
  {
    percentile: 0.03,
    threshold: 0,
  },
  {
    percentile: 0.04,
    threshold: 0,
  },
  {
    percentile: 0.05,
    threshold: 0,
  },
  {
    percentile: 0.06,
    threshold: 0,
  },
  {
    percentile: 0.07,
    threshold: 0,
  },
  {
    percentile: 0.08,
    threshold: 0,
  },
  {
    percentile: 0.09,
    threshold: 0,
  },
  {
    percentile: 0.1,
    threshold: 0,
  },
  {
    percentile: 0.11,
    threshold: 0,
  },
  {
    percentile: 0.12,
    threshold: 0,
  },
  {
    percentile: 0.13,
    threshold: 0,
  },
  {
    percentile: 0.14,
    threshold: 0,
  },
  {
    percentile: 0.15,
    threshold: 0,
  },
  {
    percentile: 0.16,
    threshold: 0,
  },
  {
    percentile: 0.17,
    threshold: 0,
  },
  {
    percentile: 0.18,
    threshold: 0,
  },
  {
    percentile: 0.19,
    threshold: 0,
  },
  {
    percentile: 0.2,
    threshold: 0,
  },
  {
    percentile: 0.21,
    threshold: 0,
  },
  {
    percentile: 0.22,
    threshold: 0,
  },
  {
    percentile: 0.23,
    threshold: 0,
  },
  {
    percentile: 0.24,
    threshold: 110,
  },
  {
    percentile: 0.25,
    threshold: 381,
  },
  {
    percentile: 0.26,
    threshold: 732,
  },
  {
    percentile: 0.27,
    threshold: 1166,
  },
  {
    percentile: 0.28,
    threshold: 1682,
  },
  {
    percentile: 0.29,
    threshold: 2280,
  },
  {
    percentile: 0.3,
    threshold: 2962,
  },
  {
    percentile: 0.31,
    threshold: 3726,
  },
  {
    percentile: 0.32,
    threshold: 4575,
  },
  {
    percentile: 0.33,
    threshold: 5507,
  },
  {
    percentile: 0.34,
    threshold: 6523,
  },
  {
    percentile: 0.35,
    threshold: 7624,
  },
  {
    percentile: 0.36,
    threshold: 8810,
  },
  {
    percentile: 0.37,
    threshold: 10081,
  },
  {
    percentile: 0.38,
    threshold: 11438,
  },
  {
    percentile: 0.39,
    threshold: 12883,
  },
  {
    percentile: 0.4,
    threshold: 14415,
  },
  {
    percentile: 0.41,
    threshold: 16038,
  },
  {
    percentile: 0.42,
    threshold: 17752,
  },
  {
    percentile: 0.43,
    threshold: 19561,
  },
  {
    percentile: 0.44,
    threshold: 21469,
  },
  {
    percentile: 0.45,
    threshold: 23480,
  },
  {
    percentile: 0.46,
    threshold: 25601,
  },
  {
    percentile: 0.47,
    threshold: 27838,
  },
  {
    percentile: 0.48,
    threshold: 30203,
  },
  {
    percentile: 0.49,
    threshold: 32706,
  },
  {
    percentile: 0.5,
    threshold: 35364,
  },
  {
    percentile: 0.51,
    threshold: 38195,
  },
  {
    percentile: 0.52,
    threshold: 41224,
  },
  {
    percentile: 0.53,
    threshold: 44479,
  },
  {
    percentile: 0.54,
    threshold: 47997,
  },
  {
    percentile: 0.55,
    threshold: 51820,
  },
  {
    percentile: 0.56,
    threshold: 55965,
  },
  {
    percentile: 0.57,
    threshold: 60409,
  },
  {
    percentile: 0.58,
    threshold: 65134,
  },
  {
    percentile: 0.59,
    threshold: 70126,
  },
  {
    percentile: 0.6,
    threshold: 75380,
  },
  {
    percentile: 0.61,
    threshold: 80905,
  },
  {
    percentile: 0.62,
    threshold: 86730,
  },
  {
    percentile: 0.63,
    threshold: 92910,
  },
  {
    percentile: 0.64,
    threshold: 99536,
  },
  {
    percentile: 0.65,
    threshold: 106723,
  },
  {
    percentile: 0.66,
    threshold: 114502,
  },
  {
    percentile: 0.67,
    threshold: 122871,
  },
  {
    percentile: 0.68,
    threshold: 131828,
  },
  {
    percentile: 0.69,
    threshold: 141376,
  },
  {
    percentile: 0.7,
    threshold: 151525,
  },
  {
    percentile: 0.71,
    threshold: 162295,
  },
  {
    percentile: 0.72,
    threshold: 173724,
  },
  {
    percentile: 0.73,
    threshold: 185882,
  },
  {
    percentile: 0.74,
    threshold: 198879,
  },
  {
    percentile: 0.75,
    threshold: 212868,
  },
  {
    percentile: 0.76,
    threshold: 227954,
  },
  {
    percentile: 0.77,
    threshold: 244226,
  },
  {
    percentile: 0.78,
    threshold: 261780,
  },
  {
    percentile: 0.79,
    threshold: 280727,
  },
  {
    percentile: 0.8,
    threshold: 301195,
  },
  {
    percentile: 0.81,
    threshold: 323334,
  },
  {
    percentile: 0.82,
    threshold: 347323,
  },
  {
    percentile: 0.83,
    threshold: 373385,
  },
  {
    percentile: 0.84,
    threshold: 401809,
  },
  {
    percentile: 0.85,
    threshold: 432976,
  },
  {
    percentile: 0.86,
    threshold: 467424,
  },
  {
    percentile: 0.87,
    threshold: 505933,
  },
  {
    percentile: 0.88,
    threshold: 549545,
  },
  {
    percentile: 0.89,
    threshold: 599360,
  },
  {
    percentile: 0.9,
    threshold: 656804,
  },
  {
    percentile: 0.91,
    threshold: 723879,
  },
  {
    percentile: 0.92,
    threshold: 803550,
  },
  {
    percentile: 0.93,
    threshold: 900553,
  },
  {
    percentile: 0.94,
    threshold: 1023200,
  },
  {
    percentile: 0.95,
    threshold: 1186444,
  },
  {
    percentile: 0.96,
    threshold: 1416658,
  },
  {
    percentile: 0.97,
    threshold: 1772646,
  },
  {
    percentile: 0.98,
    threshold: 2430361,
  },
  {
    percentile: 0.99,
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
  const [sliderValue, setSliderValue] = React.useState(80)
  const [barChartData, setBarChartData] = React.useState(data)
  const [userWealth, setUserWealth] = React.useState(100000)
  const [userPercentile, setUserPercentile] = React.useState(25)

  console.log(barChartData)

  React.useEffect(() => {
    setBarChartData(
      data.map((d) => {
        return {
          percentile: Math.round(d.percentile * 100).toString(),
          value: d.threshold.toString(),
          color:
            d.percentile * 100 === sliderValue
              ? 'estimate'
              : d.percentile * 100 === userPercentile
              ? 'reality'
              : 'default',
        }
      })
    )
  }, [sliderValue, userPercentile])

  React.useEffect(() => {
    data.forEach((d, i) => {
      if (
        i !== 0 &&
        userWealth <= d['threshold'] &&
        userWealth >= data[i - 1]['threshold']
      ) {
        setUserPercentile(data[i - 1].percentile * 100)
      }
    })
  }, [userWealth])

  useEventListener('sliderMove', (event) => {
    setSliderValue(event.detail)
  })

  useEventListener('wealthInput', (event) => {
    setUserWealth(event.detail)
  })

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
            onChange={(_, value) => {
              window.dispatchEvent(
                new CustomEvent('sliderMove', { detail: value })
              )
            }}
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
          onChange={(_, value) => {
            window.dispatchEvent(
              new CustomEvent('wealthInput', { detail: value })
            )
          }}
          onInc={() => setUserWealth(userWealth + 1000)}
          onDec={() => setUserWealth(userWealth - 1000)}
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
                x: sliderValue.toString(),
                value: Number(barChartData[sliderValue].value),
                label: 'Schätzung',
                showValue: false,
                position: 'bottom',
                align: 'left',
              },
              {
                x: userPercentile.toString(),
                value: Number(userWealth),
                label: 'Tatsächlich',
                showValue: false,
                position: 'bottom',
              },
            ],
          }}
          values={barChartData.map((d) => {
            return {
              value: d.percentile <= userPercentile ? d.value?.toString() : '0',
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
                x: sliderValue.toString(),
                value: Number(barChartData[sliderValue].value),
                label: 'Schätzung',
                showValue: false,
                position: 'bottom',
                align: 'left',
              },
              {
                x: userPercentile.toString(),
                value: userWealth,
                label: 'Tatsächlich',
                showValue: false,
                position: 'bottom',
              },
            ],
          }}
          values={barChartData.map((d) => {
            return {
              value: d.percentile >= userPercentile ? d.value?.toString() : '0',
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

// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = React.useRef()

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  React.useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  React.useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener
      if (!isSupported) return

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event)

      // Add event listener
      element.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element] // Re-run if eventName or element changes
  )
}
