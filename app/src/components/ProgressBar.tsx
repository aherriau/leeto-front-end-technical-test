export const ProgressBar = ({ percentage }: { percentage: number }) => {
  let progressBarWidth = percentage
  if (percentage < 0) progressBarWidth = 0
  if (percentage > 100) progressBarWidth = 100

  return (
    <div className="flex-1 rounded-sm h-1.5 bg-slate-300">
      <div
        data-testid="progressbar-content"
        className="h-1.5 rounded-sm bg-leeto-blue"
        style={{ width: `${progressBarWidth}%` }}
      ></div>
    </div>
  )
}
