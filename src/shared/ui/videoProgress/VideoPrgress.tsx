import { Range, getTrackBackground } from 'react-range';

type Props = {
  duration: number;
  progress: number;
  handleChange: (e: number) => void;
};

export const VideoPrgress = ({ duration, progress, handleChange }: Props) => {
  return (
    <Range
      step={0.25}
      max={duration ? duration : 100}
      values={[progress]}
      onChange={(event) => handleChange(event[0])}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '6px',
            width: '100%',
            borderRadius: '6px',
            background: getTrackBackground({
              values: [progress],
              colors: ['#ACB5F9', 'rgba(173, 182, 250, 0.4)'],
              min: 0,
              max: duration ? duration : 100,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '15px',
            width: '15px',
            backgroundColor: '#ACB5F9',
            borderRadius: '50%',
          }}
        />
      )}
    />
  );
};
