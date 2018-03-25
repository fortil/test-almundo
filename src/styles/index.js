export const flexFlowRow = {
  display: 'flex !important',
  flexFlow: 'row nowrap'
}
export const flexFlowColumn = {
  display: 'flex',
  flexFlow: 'column nowrap'
}
export const colorBlue = {
  background: {
    backgroundColor: '#07397B !important'
  },
  color: {
    color: '#157ab1 !important',
    '& span': {
      color: '#157ab1 !important'
    }
  }
}

export const flexCenter = {
  ...flexFlowColumn,
  alignItems: 'center'
}

export const buttonColorBlue = {
  '& > button': {
    ...colorBlue.background,
  },
  '& > button span': {
    color: 'white !important'
  }
}
export const appbar = {
  ...colorBlue.background,
  '&': {
    '@media screen and (max-width: 400px) and (orientation: portrait)': {
      paddingTop: 10,
      paddingBottom: 10
    },
    '@media screen and (min-width: 400px)': {
      paddingBottom: 14,
      paddingTop: 14,
    }
  }
}

export const imgLogo = {
  maxWidth: 220,
  '&': {
    '@media screen and (max-width: 400px) and (orientation: portrait)': {
      maxWidth: 180
    }
  }
}

export const content = {
  ...flexFlowColumn,
  width: '50%',
  margin: '20px 0px',
  '&': {
    '@media screen and (max-width: 400px) and (orientation: portrait)': {  
      width: '100%'
    }
  }
}

export const cardFilter = Object.assign(
  {},
  content,
  {
    margin: 'unset',
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        '> div > div': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '> div > div > button': {
          right: 'unset !important'
        },
        alignItems: 'center',
        width: '100%'
      },
      '@media screen and (min-width: 400px)': {
        width: '22%',
        marginTop: 20,
        marginLeft: 20
      }
    }
  }
)

export const cardFilterContent = {
  '&': {
    '@media screen and (max-width: 400px) and (orientation: portrait)': {
      ...flexFlowColumn
    }
  }
}

export const cardTitleFilterText = {
  display: 'flex',
  alignItems: 'center',
  ...colorBlue.color
}

export const yellowStars = {
  color: '#fdba12 !important',
  maxWidth: 24
}

export const cardTitleFilter = {
  '&': {
    '@media screen and (max-width: 400px) and (orientation: portrait)': {
      width: '100%'
    }
  }
}

export const hotelsElements = {
  color: {
    ...colorBlue.color
  },
  image: {
    maxHeight: 220,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        display: 'inline-block',
        width: '100%'
      },
      '@media screen and (min-width: 400px)': {
        maxHeight: 220,
        width: '30%'
      }
    }
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflowY: 'auto',
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        alignItems: 'center',
        marginTop: 20
      },
      '@media screen and (min-width: 400px)': {
        marginTop: 20
      }
    }
  },
  containerHotels: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        marginTop: 'unset'
      },
      '@media screen and (min-width: 400px)': {
        flexFlow: 'column nowrap',
        width: '77%',
        marginLeft: 20,
        marginRight: 20
      }
    }
  },
  hotelContainer: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        ...flexCenter
      },
      '@media screen and (min-width: 400px)': {
        ...flexFlowRow
      }
    }
  },
  containerData: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        width: '100%'
      },
      '@media screen and (min-width: 400px)': {
        width: '48%',
        paddingLeft: 10,
        h2: {
          marginTop: 0,
          marginBottom: 10,
        }
      }
    }
  },
  amenityIcon: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        marginTop: '20px',
        width: '100%'
      }
    }
  },
  titleHotel: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        width: '100%'
      },
      '@media screen and (min-width: 400px)': {
        marginBottom: 10
      }
    }
  },
  dashUnderLine: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        border: '0 none',
        borderTop: '1px dashed #322f32',
        background: 'none',
        height: 0,
        width: '100%',
        marginTop: 30,
        marginBottom: 20
      },
      '@media screen and (min-width: 400px)': {
        border: '0 none',
        borderLeft: '1px dashed #322f32',
        background: 'none',
        height: '100%',
        width: 0
      }
    }
  },
  pricePerNight: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        width: '100%',
        ...flexCenter
      },
      '@media screen and (min-width: 400px)': {
        ...flexFlowRow,
        width: '20%'
      }
    }
  },
  containerPrice: {
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        width: '100%',
        ...flexCenter
      },
      '@media screen and (min-width: 400px)': {
        width: '100%',
        ...flexFlowColumn,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        span: {
          width: '70%',
          textAlign: 'center'
        }
      }
    }
  },
  prices: {
    ...flexFlowRow,
    alignItems: 'center',
    color: '#df6800',
    h3: {
      fontSize: 24,
      fontWeight: 400
    },
    h2: {
      fontSize: 34
    },
    'h3, h2': {
      marginTop: 15,
      marginBottom: 15
    }
  },
  button: {
    ...buttonColorBlue,
    '&': {
      '@media screen and (max-width: 400px) and (orientation: portrait)': {
        ...flexFlowRow,
        alignItems: 'center',
        width: '100%',
        button: {
          height: '50px !important'
        }
      },
      '@media screen and (min-width: 400px)': {
        width: '80%'
      }
    }
  }
}

export const footer = {
  flexFlow: 'row nowrap'
}

export const listitem = {
  '& > div > div': {
    display: 'flex'
  }
}

export const bodyStyle = {
  ...flexFlowColumn,
  alignItems: 'center',
  backgroundColor: '#f4f4f4',
  '&': {
    '@media screen and (min-width: 400px)': {
      flexFlow: 'row nowrap',
      alignItems: 'flex-start'
    }
  }
}
