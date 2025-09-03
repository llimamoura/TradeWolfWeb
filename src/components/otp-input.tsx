import { OTPInput as OTPInputComponent, type SlotProps } from 'input-otp'
import { cn } from '@/lib/utils'

interface OTPInputProps {
  value: string
  onChange: (value: string) => void
  maxLength?: number
  className?: string
}

const Slot = (props: SlotProps) => {
  return (
    <div
      className={cn(
        'relative size-15 lg:size-20 bg-border text-center text-3xl font-bold rounded-full',
        'flex items-center justify-center',
        'transition-all duration-300',
        'border border-primary',
        { 'ring-2 ring-primary': props.isActive },
      )}
    >
      {props.char !== null ? (
        <div>{props.char}</div>
      ) : (
        <div className='text-muted-foreground'>-</div>
      )}
       {props.hasFakeCaret && <FakeCaret />} 
    </div>
  )
}


function FakeCaret() {
    return (
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
        <div className="w-px h-8 bg-foreground" />
      </div>
    )
  }

export function OTPInput({ value, onChange, maxLength = 4}: OTPInputProps) {
  
    const handleChange = (newValue: string) => {
    const numericValue = newValue.replace(/\D/g, '')
    onChange(numericValue)
  }

  return (
    <OTPInputComponent
      maxLength={maxLength}
      value={value}
      onChange={handleChange}
      containerClassName={"flex items-center gap-4 justify-center"}
      render={({ slots }) => (
        <div className="flex gap-4">
          {slots.slice(0,4).map((slot, idx) => (
            <Slot key={idx} {...slot} />
          ))}
        </div>
      )}
    />
  )
}
