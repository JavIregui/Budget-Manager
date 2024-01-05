export default function ProgressBar({ percent }) {
    // Bar color
    let darkColor
    if (percent >= 75) {
        darkColor = 'bg-red-500'
    } else if (percent >= 50) {
        darkColor = 'bg-yellow-500'
    } else {
        darkColor = 'bg-slate-400'
    }
    // Bar size
    let barSize
    if(percent >= 100) {
        barSize = 100
    } else if (percent >= 0) {
        barSize = percent
    } else {
        barSize = 0
    }

    return (
        <div className="bg-slate-200 h-4 w-full rounded mb-4">
            <div className={`${darkColor} h-4 rounded`} style={{ width: `${barSize}%` }}></div>
        </div>
    );
}
