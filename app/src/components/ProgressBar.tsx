export const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="flex-1 rounded-sm h-1.5 bg-slate-300">
      <div
        className="h-1.5 rounded-sm bg-leeto-blue"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}
