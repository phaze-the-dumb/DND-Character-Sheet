import { createEffect, createSignal } from 'solid-js';

import './InputForm.css'
import Config from '../../Classes/Config';

const defaultConfig: Config = new Config();

let InputForm = () => {
  let d: Config = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')!) : defaultConfig;

  let successButtons: Array<HTMLElement> = [];
  let failureButtons: Array<HTMLElement> = [];

  let selectSuccessButton = ( index: number ) => {
    successButtons[index].classList.toggle('checked');
    d.DeathSaves.Successes[index] = !d.DeathSaves.Successes[index];

    localStorage.setItem('data', JSON.stringify(d));
  }

  let selectFailureButton = ( index: number ) => {
    failureButtons[index].classList.toggle('checked');
    d.DeathSaves.Failures[index] = !d.DeathSaves.Failures[index];

    localStorage.setItem('data', JSON.stringify(d));
  }

  let downloadConfig = () => {
    let name = d.Name.toLowerCase() + '.cha';
    let data = JSON.stringify(d);

    let link = document.createElement('a');
    link.href = 'data:text/html,' + encodeURIComponent(data);
    link.download = name;

    document.body.appendChild(link);
    link.click();

    link.remove();
  }

  let loadFile = ( input: HTMLInputElement ) => {
    let reader = new FileReader();

    reader.onload = () => {
      try{
        let data = JSON.parse(reader.result!.toString());
        let text = '';

        Object.keys(data).forEach(key => {
          text += 'set'+key[0].toUpperCase()+key.slice(1)+'(data.'+key + ');\n';
        })

        d.DeathSaves.Successes = data.DeathSaves.Successes;
        d.DeathSaves.Failures = data.DeathSaves.Failures;

        setCharacterName(data.Name);
        setClassName(data.Class);
        setLevel(data.Level);
        setBackground(data.Background);
        setRace(data.Race);
        setAlignment(data.Alignment);
        setXP(data.ExperiencePoints);
        setStrength(data.Strength);
        setDexterity(data.Dexterity);
        setConstitution(data.Constitution);
        setIntelligence(data.Intelligence);
        setWisdom(data.Wisdom);
        setCharisma(data.Charisma);
        setStrengthMod(data.StrengthMod);
        setDexterityMod(data.DexterityMod);
        setConstitutionMod(data.ConstitutionMod);
        setIntelligenceMod(data.IntelligenceMod);
        setWisdomMod(data.WisdomMod);
        setCharismaMod(data.CharismaMod);
        setInspiration(data.Inspiration);
        setProficiencyBonus(data.ProficiencyBonus);
        setArmourClass(data.ArmourClass);
        setInitiative(data.Initiative);
        setSpeed(data.Speed);
        setPersonalityTraits(data.PersonalityTraits);
        setIdeals(data.Ideals);
        setBonds(data.Bonds);
        setFlaws(data.Flaws);
        setHitDice(data.HitDice);
        setHitDiceTotal(data.HitDiceTotal);
        setFeaturesTraits(data.FeaturesTraits);
        setCurrentHitPoints(data.HitPoints.CurrentHitPoints);
        setMaximumHitPoints(data.HitPoints.MaximumHitPoints);
        setWeapon1Name(data.AttacksSpellCasting.Weapons[0].Name);
        setWeapon1AtkBonus(data.AttacksSpellCasting.Weapons[0].AtkBonus);
        setWeapon1Damage(data.AttacksSpellCasting.Weapons[0].Damage);
        setWeapon2Name(data.AttacksSpellCasting.Weapons[1].Name);
        setWeapon2AtkBonus(data.AttacksSpellCasting.Weapons[1].AtkBonus);
        setWeapon2Damage(data.AttacksSpellCasting.Weapons[1].Damage);
        setWeapon3Name(data.AttacksSpellCasting.Weapons[2].Name);
        setWeapon3AtkBonus(data.AttacksSpellCasting.Weapons[2].AtkBonus);
        setWeapon3Damage(data.AttacksSpellCasting.Weapons[2].Damage);
        setStrengthThrow(data.SavingThrows.Strength);
        setDexterityThrow(data.SavingThrows.Dexterity);
        setConstitutionThrow(data.SavingThrows.Constitution);
        setIntelligenceThrow(data.SavingThrows.Intelligence);
        setWisdomThrow(data.SavingThrows.Wisdom);
        setCharismaThrow(data.SavingThrows.Charisma);
        // setOtherProficienciesLanguages(data.OtherProficienciesLanguages);
        // setEquipment(data.Equipment);
        // setMoney(data.Money);
        // setSkills(data.Skills);
        // setSavingThrows(data.SavingThrows);
        // setPassiveWisdomPerception(data.PassiveWisdomPerception);
        // setPassiveIntelligenceInvestigation(data.PassiveIntelligenceInvestigation);
        // setPassiveWisdomInsight(data.PassiveWisdomInsight);
        // setOther(data.Other);
        // setNotes(data.Notes);
      } catch(e){
        alert('Invalid Character File. Double check the file, if it is the correct file, it may be corrupted.');
      }
    }

    reader.readAsText(input.files![0]);
  }

  let [ characterName, setCharacterName ] = createSignal(d.Name);

  let [ className, setClassName ] = createSignal(d.Class);
  let [ level, setLevel ] = createSignal(d.Level);
  let [ background, setBackground ] = createSignal(d.Background);
  let [ race, setRace ] = createSignal(d.Race);
  let [ alignment, setAlignment ] = createSignal(d.Alignment);
  let [ xp, setXP ] = createSignal(d.ExperiencePoints);

  let [ strength, setStrength ] = createSignal(d.Strength);
  let [ dexterity, setDexterity ] = createSignal(d.Dexterity);
  let [ constitution, setConstitution ] = createSignal(d.Constitution);
  let [ intelligence, setIntelligence ] = createSignal(d.Intelligence);
  let [ wisdom, setWisdom ] = createSignal(d.Wisdom);
  let [ charisma, setCharisma ] = createSignal(d.Charisma);

  let [ strengthMod, setStrengthMod ] = createSignal(d.StrengthMod);
  let [ dexterityMod, setDexterityMod ] = createSignal(d.DexterityMod);
  let [ constitutionMod, setConstitutionMod ] = createSignal(d.ConstitutionMod);
  let [ intelligenceMod, setIntelligenceMod ] = createSignal(d.IntelligenceMod);
  let [ wisdomMod, setWisdomMod ] = createSignal(d.WisdomMod);
  let [ charismaMod, setCharismaMod ] = createSignal(d.CharismaMod);

  let [ armourClass, setArmourClass ] = createSignal(d.ArmourClass);
  let [ initiative, setInitiative ] = createSignal(d.Initiative);
  let [ speed, setSpeed ] = createSignal(d.Speed);

  let [ personalityTraits, setPersonalityTraits ] = createSignal(d.PersonalityTraits);
  let [ ideals, setIdeals ] = createSignal(d.Ideals);
  let [ bonds, setBonds ] = createSignal(d.Bonds);
  let [ flaws, setFlaws ] = createSignal(d.Flaws);

  let [ inspiration, setInspiration ] = createSignal(d.Inspiration);
  let [ proficiencyBonus, setProficiencyBonus ] = createSignal(d.ProficiencyBonus);

  let [ hitDice, setHitDice ] = createSignal(d.HitDice);
  let [ hitDiceTotal, setHitDiceTotal ] = createSignal(d.HitDiceTotal);

  let [ featuresTraits, setFeaturesTraits ] = createSignal(d.FeaturesTraits);

  let [ currentHitPoints, setCurrentHitPoints ] = createSignal(d.HitPoints.CurrentHitPoints);
  let [ maximumHitPoints, setMaximumHitPoints ] = createSignal(d.HitPoints.MaximumHitPoints);
  let [ temporaryHitPoints, setTemporaryHitPoints ] = createSignal(d.HitPoints.TemporaryHitPoints);

  let [ weapon1Name, setWeapon1Name ] = createSignal(d.AttacksSpellCasting.Weapons[0].Name);
  let [ weapon1AtkBonus, setWeapon1AtkBonus ] = createSignal(d.AttacksSpellCasting.Weapons[0].AtkBonus);
  let [ weapon1Damage, setWeapon1Damage ] = createSignal(d.AttacksSpellCasting.Weapons[0].Damage);

  let [ weapon2Name, setWeapon2Name ] = createSignal(d.AttacksSpellCasting.Weapons[1].Name);
  let [ weapon2AtkBonus, setWeapon2AtkBonus ] = createSignal(d.AttacksSpellCasting.Weapons[1].AtkBonus);
  let [ weapon2Damage, setWeapon2Damage ] = createSignal(d.AttacksSpellCasting.Weapons[1].Damage);

  let [ weapon3Name, setWeapon3Name ] = createSignal(d.AttacksSpellCasting.Weapons[2].Name);
  let [ weapon3AtkBonus, setWeapon3AtkBonus ] = createSignal(d.AttacksSpellCasting.Weapons[2].AtkBonus);
  let [ weapon3Damage, setWeapon3Damage ] = createSignal(d.AttacksSpellCasting.Weapons[2].Damage);

  let [ strengthThrow, setStrengthThrow ] = createSignal(d.SavingThrows.Strength);
  let [ dexterityThrow, setDexterityThrow ] = createSignal(d.Dexterity);
  let [ constitutionThrow, setConstitutionThrow ] = createSignal(d.Constitution);
  let [ intelligenceThrow, setIntelligenceThrow ] = createSignal(d.Intelligence);
  let [ wisdomThrow, setWisdomThrow ] = createSignal(d.Wisdom);
  let [ charismaThrow, setCharismaThrow ] = createSignal(d.Charisma);

  createEffect(() => {
    d.Name = characterName();

    d.Class = className();
    d.Level = level();
    d.Background = background();
    d.Race = race();
    d.Alignment = alignment();
    d.ExperiencePoints = xp();

    d.Strength = strength();
    d.Dexterity = dexterity();
    d.Constitution = constitution();
    d.Intelligence = intelligence();
    d.Wisdom = wisdom();
    d.Charisma = charisma();

    d.StrengthMod = strengthMod();
    d.DexterityMod = dexterityMod();
    d.ConstitutionMod = constitutionMod();
    d.IntelligenceMod = intelligenceMod();
    d.WisdomMod = wisdomMod();
    d.CharismaMod = charismaMod();

    d.ArmourClass = armourClass();
    d.Initiative = initiative();
    d.Speed = speed();

    d.PersonalityTraits = personalityTraits();
    d.Ideals = ideals();
    d.Bonds = bonds();
    d.Flaws = flaws();

    d.Inspiration = inspiration();
    d.ProficiencyBonus = proficiencyBonus();

    d.HitDice = hitDice();
    d.HitDiceTotal = hitDiceTotal();

    d.FeaturesTraits = featuresTraits();

    d.HitPoints.CurrentHitPoints = currentHitPoints();
    d.HitPoints.MaximumHitPoints = maximumHitPoints();
    d.HitPoints.TemporaryHitPoints = temporaryHitPoints();

    d.AttacksSpellCasting.Weapons[0].Name = weapon1Name();
    d.AttacksSpellCasting.Weapons[0].AtkBonus = weapon1AtkBonus();
    d.AttacksSpellCasting.Weapons[0].Damage = weapon1Damage();

    d.AttacksSpellCasting.Weapons[1].Name = weapon1Name();
    d.AttacksSpellCasting.Weapons[1].AtkBonus = weapon1AtkBonus();
    d.AttacksSpellCasting.Weapons[1].Damage = weapon1Damage();

    d.AttacksSpellCasting.Weapons[2].Name = weapon1Name();
    d.AttacksSpellCasting.Weapons[2].AtkBonus = weapon1AtkBonus();
    d.AttacksSpellCasting.Weapons[2].Damage = weapon1Damage();

    d.SavingThrows.Charisma = charismaThrow();
    d.SavingThrows.Constitution = constitutionThrow();
    d.SavingThrows.Dexterity = dexterityThrow();
    d.SavingThrows.Intelligence = intelligenceThrow();
    d.SavingThrows.Strength = strengthThrow();
    d.SavingThrows.Wisdom = wisdomThrow();

    localStorage.setItem('data', JSON.stringify(d));
  })

  return (
    <div class="input-form">
      <input type="text" placeholder='Character Name' value={characterName()} onInput={( el ) => setCharacterName(el.currentTarget.value) } style={{ "font-size": '30px', width: '300px' }} />
      <br /><br />

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Class</div>
          <input value={className()} onInput={( el ) => setClassName(el.currentTarget.value) } placeholder="Class" />

          <div class="tiny-text">Race</div>
          <input value={race()} onInput={( el ) => setRace(el.currentTarget.value) } placeholder="Race" />

          <div class="tiny-text">Level</div>
          <input value={level()} onInput={( el ) => parseInt(el.currentTarget.value) !== undefined ? setLevel(parseInt(el.currentTarget.value)) : null }placeholder="Level" />
        </div>
        <div class="column-2">
          <div class="tiny-text">Background</div>
          <input value={background()} onInput={( el ) => setBackground(el.currentTarget.value) } placeholder="Background" />

          <div class="tiny-text">Alignment</div>
          <input value={alignment()} onInput={( el ) => setAlignment(el.currentTarget.value) } placeholder="Alignment" />

          <div class="tiny-text">XP</div>
          <input value={xp()} onInput={( el ) => parseFloat(el.currentTarget.value) !== undefined ? setXP(parseFloat(el.currentTarget.value)) : null } placeholder="XP" />
        </div>
      </div>
      <br />

      <div class="tiny-text">HP</div>
      <div class="health">
        <input value={currentHitPoints()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setCurrentHitPoints(parseInt(el.currentTarget.value)) : null } style={{ width: '100px' }} />
        <span style={{ "font-family": 'Rubik, sans-serif' }}> / </span>
        <input value={maximumHitPoints()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setMaximumHitPoints(parseInt(el.currentTarget.value)) : null } style={{ width: '100px' }} />
      </div>

      <div class="tiny-text">Temporary HP</div>
      <input value={temporaryHitPoints()} onInput={( el ) => !isNaN(parseInt(el.currentTarget.value)) ? setTemporaryHitPoints(parseInt(el.currentTarget.value)) : null } style={{ width: '100px' }} />

      <br /><br />

      <div class="hp-bar">
        <div class="bar" style={{
          background: (currentHitPoints() + temporaryHitPoints()) /
                      (maximumHitPoints() + temporaryHitPoints()) >= 0.31 ? 'rgba(0, 255, 55, 0.5)' : 'rgba(255, 0, 0, 0.5)',
          width:  ((currentHitPoints() + temporaryHitPoints()) /
                  (maximumHitPoints() + temporaryHitPoints())) * 100 + '%'
        }}>
          { currentHitPoints() + temporaryHitPoints() }/{ maximumHitPoints() + temporaryHitPoints() }
        </div>
      </div>

      <br /><br />

      <div class="tiny-text">Stats</div>
      <div class="stats">
        <div class="stat">
          Strength<br />
          <input value={strengthMod()} onInput={( el ) => setStrengthMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={strength()} onInput={( el ) => setStrength(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Dexterity<br />
          <input value={dexterityMod()} onInput={( el ) => setDexterityMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={dexterity()} onInput={( el ) => setDexterity(el.currentTarget.value) }  style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Constitution<br />
          <input value={constitutionMod()} onInput={( el ) => setConstitutionMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={constitution()} onInput={( el ) => setConstitution(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Intelligence<br />
          <input value={intelligenceMod()} onInput={( el ) => setIntelligenceMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={intelligence()} onInput={( el ) => setIntelligence(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Wisdom<br />
          <input value={wisdomMod()} onInput={( el ) => setWisdomMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={wisdom()} onInput={( el ) => setWisdom(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
        <div class="stat">
          Charisma<br />
          <input value={charismaMod()} onInput={( el ) => setCharismaMod(el.currentTarget.value) } style={{ width: '100px' }} /><br />
          <input value={charisma()} onInput={( el ) => setCharisma(el.currentTarget.value) } style={{ width: '80px', "font-size": '13px' }} />
        </div>
      </div><br />

      <div class="tiny-text">Saving Throws</div>
      <div class="stats">
        <div class="stat">
          Strength<br />
          <input value={strengthThrow()} onInput={( el ) => setStrengthThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
        </div>
        <div class="stat">
          Dexterity<br />
          <input value={dexterityThrow()} onInput={( el ) => setDexterityThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
        </div>
        <div class="stat">
          Constitution<br />
          <input value={constitutionThrow()} onInput={( el ) => setConstitutionThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
        </div>
        <div class="stat">
          Intelligence<br />
          <input value={intelligenceThrow()} onInput={( el ) => setIntelligenceThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
        </div>
        <div class="stat">
          Wisdom<br />
          <input value={wisdomThrow()} onInput={( el ) => setWisdomThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
        </div>
        <div class="stat">
          Charisma<br />
          <input value={charismaThrow()} onInput={( el ) => setCharismaThrow(el.currentTarget.value) } style={{ width: '100px' }} /><br />
        </div>
      </div><br />

      <div class="row">
        <div class="column-3">
          <div class="tiny-text">Armour Class</div>
          <input value={armourClass()} onInput={( el ) => parseFloat(el.currentTarget.value) !== undefined ? setArmourClass(parseFloat(el.currentTarget.value)) : null } style={{ width: '100%' }} />
        </div>
        <div class="column-3">
          <div class="tiny-text">Initiative</div>
          <input value={initiative()} onInput={( el ) => setInitiative(el.currentTarget.value) }  style={{ width: '100%' }} />
        </div>
        <div class="column-3">
          <div class="tiny-text">Speed</div>
          <input value={speed()} onInput={( el ) => parseFloat(el.currentTarget.value) !== undefined ? setSpeed(parseFloat(el.currentTarget.value)) : null }  style={{ width: '100%' }} />
        </div>
      </div><br />

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Personality Traits</div>
          <textarea value={personalityTraits()} onInput={( el ) => setPersonalityTraits(el.currentTarget.value)}></textarea>
        </div>
        <div class="column-2">
          <div class="tiny-text">Ideals</div>
          <textarea value={ideals()} onInput={( el ) => setIdeals(el.currentTarget.value)}></textarea>
        </div>
      </div>

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Bonds</div>
          <textarea value={bonds()} onInput={( el ) => setBonds(el.currentTarget.value)}></textarea>
        </div>
        <div class="column-2">
          <div class="tiny-text">Flaws</div>
          <textarea value={flaws()} onInput={( el ) => setFlaws(el.currentTarget.value)}></textarea>
        </div>
      </div>

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Inspiration</div>
          <input value={inspiration()} onInput={( el ) => setInspiration(el.currentTarget.value) }  style={{ width: '100%' }} />
        </div>
        <div class="column-2">
          <div class="tiny-text">Proficiency Bonus</div>
          <input value={proficiencyBonus()} onInput={( el ) => setProficiencyBonus(el.currentTarget.value) }  style={{ width: '100%' }} />
        </div>
      </div><br />

      <div class="row">
        <div class="column-2">
          <div class="tiny-text">Hit Dice</div>
          <input value={hitDice()} onInput={( el ) => setHitDice(el.currentTarget.value) }  style={{ width: '100%' }} />

          <div class="tiny-text" style={{ display: 'inline-block' }}>Total</div>
          <input value={hitDiceTotal()} onInput={( el ) => setHitDiceTotal(el.currentTarget.value) }  style={{ width: '75px', 'font-size': '15px' }} />
        </div>
        <div class="column-2">
          <div class="tiny-text">Death Saves</div>
          <div class="tiny-text" style={{ display: 'inline-block' }}>Successes</div>
          <div style={{ margin: '0px 5px', display: 'inline-block' }}></div>
          <div class={ d.DeathSaves.Successes[0] ? "checkbox checked" : "checkbox"} ref={( el ) => successButtons.push(el)} onClick={() => selectSuccessButton(0)}></div>
          <div class={ d.DeathSaves.Successes[1] ? "checkbox checked" : "checkbox"} ref={( el ) => successButtons.push(el)} onClick={() => selectSuccessButton(1)}></div>
          <div class={ d.DeathSaves.Successes[2] ? "checkbox checked" : "checkbox"} ref={( el ) => successButtons.push(el)} onClick={() => selectSuccessButton(2)}></div>

          <br />
          <div class="tiny-text" style={{ display: 'inline-block' }}>Failures</div>
          <div style={{ margin: '0px 5px', display: 'inline-block' }}></div>
          <div class={ d.DeathSaves.Failures[0] ? "checkbox checked" : "checkbox"} ref={( el ) => failureButtons.push(el)} onClick={() => selectFailureButton(0)}></div>
          <div class={ d.DeathSaves.Failures[1] ? "checkbox checked" : "checkbox"} ref={( el ) => failureButtons.push(el)} onClick={() => selectFailureButton(1)}></div>
          <div class={ d.DeathSaves.Failures[2] ? "checkbox checked" : "checkbox"} ref={( el ) => failureButtons.push(el)} onClick={() => selectFailureButton(2)}></div>
        </div>
      </div><br />

      <div>
        <div class="tiny-text">Features and Traits</div>
        <textarea value={featuresTraits()} onInput={( el ) => setFeaturesTraits(el.currentTarget.value)} style={{ height: '200px' }}></textarea>
      </div><br />

      <div>
        <div class="tiny-text">Attacks and Spellcasting</div>

        <div class="row">
          <div class="column-2">
            <input value={weapon1Name()} onInput={( el ) => setWeapon1Name(el.currentTarget.value) } />
            <input value={weapon2Name()} onInput={( el ) => setWeapon2Name(el.currentTarget.value) } />
            <input value={weapon3Name()} onInput={( el ) => setWeapon3Name(el.currentTarget.value) } />
          </div>
          <div class="column-4">
            <input value={weapon1AtkBonus()} onInput={( el ) => setWeapon1AtkBonus(el.currentTarget.value) } />
            <input value={weapon2AtkBonus()} onInput={( el ) => setWeapon2AtkBonus(el.currentTarget.value) } />
            <input value={weapon3AtkBonus()} onInput={( el ) => setWeapon3AtkBonus(el.currentTarget.value) } />
          </div>
          <div class="column-2">
            <input value={weapon1Damage()} onInput={( el ) => setWeapon1Damage(el.currentTarget.value) } />
            <input value={weapon2Damage()} onInput={( el ) => setWeapon2Damage(el.currentTarget.value) } />
            <input value={weapon3Damage()} onInput={( el ) => setWeapon3Damage(el.currentTarget.value) } />
          </div>
        </div>

        <textarea value={featuresTraits()} onInput={( el ) => setFeaturesTraits(el.currentTarget.value)} style={{ height: '150px' }}></textarea>
      </div>

      <br />
      <div class="button" onClick={() => downloadConfig()}>Save</div>

      <input type="file" style={{ display: 'none' }} id="load-file" accept=".cha" onChange={( el ) => loadFile(el.currentTarget) } multiple={false} />

      <label for="load-file">
        <div class="button">Load</div>
      </label>

      <br /><br /><br />
    </div>
  )
}

export default InputForm