import dayjs, { Dayjs } from 'dayjs'

export const Format = {
  date: 'YYYY-MM-DD',
  dateJp: 'YYYY年MM月DD日',
  datetime: 'YYYY-MM-DD HH:MM:SS',
  time: 'HH:mm',
}

export const Formatter = {
  date: (date?: string | Date | Dayjs | null, isJp = false): string =>
    !date ? '' : dayjs(date).format(isJp ? Format.dateJp : Format.date),
  dateTime: (date?: string | Date | Dayjs | null): string => (!date ? '' : dayjs(date).format(Format.date)),
}
