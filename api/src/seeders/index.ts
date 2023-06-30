import Button from '../models/buttons'

export const seedButtons = async (): Promise<void> => {
  try {
    await Button.create({
      name: 'Default',
      colorDefault: '#E0E0E0',
      colorHover: '#AEAEAE',
      colorText: '#3F3F3F',
      size: 'md',
      text: 'Default',
      icon: null,
      clicks: 0
    })
    await Button.create({
      name: 'Primary',
      colorDefault: '#3F51B5',
      colorHover: '#303F9F',
      colorText: '#FFFFFF',
      size: 'md',
      text: 'Primary',
      icon: null,
      clicks: 0
    })
    await Button.create({
      name: 'Secondary',
      colorDefault: '#FF4081',
      colorHover: '#F50057',
      colorText: '#FFFFFF',
      size: 'md',
      text: 'Secondary',
      icon: null,
      clicks: 0
    })
    console.log('✅ Buttons seeded successfully.')
  } catch (error) {
    console.error('❌ Error seeding buttons:', error)
  }
}
